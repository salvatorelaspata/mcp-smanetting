import cds from "@sap/cds";

let bupa;

async function get_bupa(req) {
    const query = await bupa.run(req.query);
    return query;
}

async function BupaService () {
    bupa = await cds.connect.to("API_BUSINESS_PARTNER");
    this.on("READ", "*", get_bupa)
}

export default BupaService;