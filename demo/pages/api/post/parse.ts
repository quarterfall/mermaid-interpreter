import { NextApiRequest, NextApiResponse } from "next";
import { parseidon } from "@quarterfall/parseidon";

export default async function parseHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const input = req.body;

    const parsedChart = await parseidon(input);

    parsedChart
        ? res.status(200).json(parsedChart)
        : res.status(404).json({ message: "Chart wasn't parsed correctly" });
}
