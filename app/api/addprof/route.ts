// pages/api/addprof.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const requestData = await request.json();

        const response = await fetch("http://kahoot.nos-apps.com/api/users", {
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
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API externe:", error);
        return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const requestData = await request.json();
        const userId = requestData.id; // Assurez-vous que l'ID de l'utilisateur est passé dans les données de la requête

        const response = await fetch(`http://kahoot.nos-apps.com/api/users/${userId}`, {
            method: "PUT",
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
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
        return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "";

  try {
    const response = await fetch(`http://kahoot.nos-apps.com/api/users?name=${encodeURIComponent(name)}`);

    if (!response.ok) {
      const errorData = await response.text();
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json(); // Assurez-vous que l'ID de l'utilisateur est passé dans les données de la requête

        const response = await fetch(`http://kahoot.nos-apps.com/api/users/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const errorData = await response.text();
            return NextResponse.json({ error: errorData }, { status: response.status });
        }

        return NextResponse.json({ message: "Utilisateur supprimé avec succès." }, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur:", error);
        return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}
