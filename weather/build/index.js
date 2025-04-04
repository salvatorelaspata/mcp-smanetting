import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const NWS_API_BASE = "https://api.weather.gov";
const USER_AGENT = "weather-app/1.0";
// Create server instance
const server = new McpServer({
    name: "weather",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
// Helper function for making NWS API requests
async function makeNWSRequest(url) {
    const headers = {
        "User-Agent": USER_AGENT,
        Accept: "application/geo+json",
    };
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return (await response.json());
    }
    catch (error) {
        console.error("Error making NWS request:", error);
        return null;
    }
}
// Format alert data
function formatAlert(feature) {
    const props = feature.properties;
    return [
        `Event: ${props.event || "Unknown"}`,
        `Area: ${props.areaDesc || "Unknown"}`,
        `Severity: ${props.severity || "Unknown"}`,
        `Status: ${props.status || "Unknown"}`,
        `Headline: ${props.headline || "No headline"}`,
        "---",
    ].join("\n");
}
// Register weather tools
server.tool("get-alerts", "Get weather alerts for a state", {
    state: z.string().length(2).describe("Two-letter state code (e.g. CA, NY)"),
}, async ({ state }) => {
    const stateCode = state.toUpperCase();
    const alertsUrl = `${NWS_API_BASE}/alerts?area=${stateCode}`;
    const alertsData = await makeNWSRequest(alertsUrl);
    if (!alertsData) {
        return {
            content: [
                {
                    type: "text",
                    text: "Failed to retrieve alerts data",
                },
            ],
        };
    }
    const features = alertsData.features || [];
    if (features.length === 0) {
        return {
            content: [
                {
                    type: "text",
                    text: `No active alerts for ${stateCode}`,
                },
            ],
        };
    }
    const formattedAlerts = features.map(formatAlert);
    const alertsText = `Active alerts for ${stateCode}:\n\n${formattedAlerts.join("\n")}`;
    return {
        content: [
            {
                type: "text",
                text: alertsText,
            },
        ],
    };
});
server.tool("get-forecast", "Get weather forecast for a location", {
    latitude: z.number().min(-90).max(90).describe("Latitude of the location"),
    longitude: z.number().min(-180).max(180).describe("Longitude of the location"),
}, async ({ latitude, longitude }) => {
    // Get grid point data
    const pointsUrl = `${NWS_API_BASE}/points/${latitude.toFixed(4)},${longitude.toFixed(4)}`;
    const pointsData = await makeNWSRequest(pointsUrl);
    if (!pointsData) {
        return {
            content: [
                {
                    type: "text",
                    text: `Failed to retrieve grid point data for coordinates: ${latitude}, ${longitude}. This location may not be supported by the NWS API (only US locations are supported).`,
                },
            ],
        };
    }
    const forecastUrl = pointsData.properties?.forecast;
    if (!forecastUrl) {
        return {
            content: [
                {
                    type: "text",
                    text: "Failed to get forecast URL from grid point data",
                },
            ],
        };
    }
    // Get forecast data
    const forecastData = await makeNWSRequest(forecastUrl);
    if (!forecastData) {
        return {
            content: [
                {
                    type: "text",
                    text: "Failed to retrieve forecast data",
                },
            ],
        };
    }
    const periods = forecastData.properties?.periods || [];
    if (periods.length === 0) {
        return {
            content: [
                {
                    type: "text",
                    text: "No forecast periods available",
                },
            ],
        };
    }
    // Format forecast periods
    const formattedForecast = periods.map((period) => [
        `${period.name || "Unknown"}:`,
        `Temperature: ${period.temperature || "Unknown"}°${period.temperatureUnit || "F"}`,
        `Wind: ${period.windSpeed || "Unknown"} ${period.windDirection || ""}`,
        `${period.shortForecast || "No forecast available"}`,
        "---",
    ].join("\n"));
    const forecastText = `Forecast for ${latitude}, ${longitude}:\n\n${formattedForecast.join("\n")}`;
    return {
        content: [
            {
                type: "text",
                text: forecastText,
            },
            // {
            //   type: "image",
            //   data: "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",
            //   mimeType: "image/jpeg",
            // },
            // {
            //   type: 'resource',
            //   resource: {
            //     uri: `https://fastly.picsum.photos/id/222/200/300.jpg?hmac=owJZdOfXwkUqJHbR-MjF56GoNKbFIp3qGeGkkBS3Ei0`
            //   }
            // }
        ],
    };
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Weather MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
