import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const requestData = await request.json();

        const response = await fetch("http://kahoot.nos-apps.com/api/ecoles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            const errorData = await response.text();
            return NextResponse.json({ error: errorData }, { status: response.status });
        }
        
        const contentType = response.headers.get("content-type");
        const data = contentType && contentType.includes("application/json")
            ? await response.json()
            : await response.text();

        return NextResponse.json(data, { status: response.status });

    }  catch (error) {
        console.error("Erreur lors de la connexion à l'API externe:", error);
        return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}