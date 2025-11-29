let PRESERVIA_DB_CACHE = null;

async function loadPreserviaDB() {
    if (PRESERVIA_DB_CACHE) return PRESERVIA_DB_CACHE;

    const response = await fetch("/database/db.json");
    const db = await response.json();
    const arr = Object.entries(db).map(([id, entry]) => ({
        id,
        ...entry
    }));

    PRESERVIA_DB_CACHE = arr;
    return arr;
}

function renderEntryCard(entry) {
    const id = entry.id;
    const type = entry.type;
    const typePlural = type + "s";
    const pageURL = `/database/content/${typePlural}/${id}.html`;
    const iconURL = `https://raw.githubusercontent.com/preservia/media/refs/heads/main/icons/${id}.png`;

    if (type === "font") {
        return `
            <a href="${pageURL}" class="content-card font-card">
                <img src="${iconURL}" alt="${entry.name} Preview" class="font-preview">
            </a>
        `;
    }

    return `
        <a href="${pageURL}" class="content-card game-card">
            <img src="${iconURL}" class="card-icon" alt="${entry.name} icon">
            <div class="card-info">
                <div class="card-title">${entry.name}</div>
                <div class="card-meta">
                    <span class="card-type">${type.charAt(0).toUpperCase()}${type.slice(1)}</span>
                    ${entry.version ? `<code class="card-version">v${entry.version}</code>` : ""}
                </div>
            </div>
        </a>
    `;
}

async function renderContentList(options) {
    const {
        elementId,
        count = 5,
        filterType = "all",
        featuredIDs = null
    } = options;

    const container = document.getElementById(elementId);
    if (!container) return;

    try {
        const db = await loadPreserviaDB();

        let items = [];

        if (featuredIDs) {
            items = featuredIDs
                .map(id => db.find(item => item.id === id))
                .filter(Boolean);
        }

        else {
            const reversed = [...db].reverse();

            items = reversed.filter(entry => {
                if (filterType === "all") return true;
                return entry.type === filterType;
            });

            items = items.slice(0, count);
        }

        container.innerHTML = "";

        for (const entry of items) {
            container.innerHTML += renderEntryCard(entry);
        }

    } catch (err) {
        console.error(err);
        container.innerHTML = "Error loading content.";
    }
}