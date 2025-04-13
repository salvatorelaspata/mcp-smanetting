# SAP Planned Orders MCP Server

A Model Context Protocol server for retrieving SAP Planned Orders data.

## Setup

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root with your SAP credentials:
```
SAP_USERNAME=your_sap_username
SAP_PASSWORD=your_sap_password
SAP_BASE_URL=your_sap_base_url
```

4. Build the project:
```bash
npm run build
```

5. Run the server:
```bash
npm start
```

## Development

For development mode with auto-reloading:
```bash
npm run dev
npm run start:dev
```

## Generate SAP OData Client

To generate the SAP OData client from specifications:
```bash
npx generate-odata-client --input resources/service-specs --outputDir src/generated
```
