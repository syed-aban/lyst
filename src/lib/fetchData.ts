async function fetchData(){
    const res = await fetch("http://localhost:3000/api/projects", {cache: "no-store"});
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
}