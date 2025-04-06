import { NextResponse } from "next/server";
import { API_BASE_URL } from "../../utils/config";

// Catchall API route handler for proxying all API requests to backend
export async function GET(request, context) {
  try {
    // ต้องใช้ await กับ context.params ในการเข้าถึง path
    const params = await context.params;
    const { path } = params;
    const pathArray = Array.isArray(path) ? path : [path];
    const pathString = pathArray.join("/");

    // สร้าง URL สำหรับเรียก API
    const url = new URL(request.url);
    const targetUrl = `${API_BASE_URL}/api/${pathString}${url.search}`;

    console.log(`Proxying request to: ${targetUrl}`);

    // ส่งคำขอไปยัง API backend
    const response = await fetch(targetUrl);

    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { error: `Failed to fetch data from API: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // คืนค่าผลลัพธ์กลับไปยังไคลเอนต์
    return NextResponse.json(data);
  } catch (error) {
    console.error("API proxy error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from API" },
      { status: 500 }
    );
  }
}
