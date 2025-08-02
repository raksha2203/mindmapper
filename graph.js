fetch("http://127.0.0.1:5000/mindmap", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        text: "Artificial intelligence helps doctors make better decisions in less time."
    })
})
.then(res => res.json())
.then(data => {
    const nodes = data.nodes.map(n => ({ data: { id: n.id, label: n.id } }));
    const edges = data.edges.map(e => ({
        data: {
            source: e.source,
            target: e.target,
            label: e.label
        }
    }));

    cytoscape({
        container: document.getElementById("cy"),
        elements: [...nodes, ...edges],
        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(label)',
                    'background-color': '#0074D9',
                    'text-valign': 'center',
                    'color': '#fff',
                    'font-size': '14px',
                    'text-outline-color': '#0074D9',
                    'text-outline-width': 2
                }
            },
            {
                selector: 'edge',
                style: {
                    'label': 'data(label)',
                    'curve-style': 'bezier',
                    'target-arrow-shape': 'triangle',
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc'
                }
            }
        ],
        layout: { name: 'cose' }
    });
});
