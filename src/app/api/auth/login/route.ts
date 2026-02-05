import { NextRequest } from "next/server";
import {scalekit} from "@/lib/scalekit"
export async function GET(req:NextRequest) {
    scalekit.getAuthorizationUrl
}