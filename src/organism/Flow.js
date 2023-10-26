import {useState, useCallback} from 'react';
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge, useReactFlow, ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from "../components/Node";


const nodeTypes = { textUpdater: TextUpdaterNode };

const initialNodes = [
    {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'textUpdater',
    },
    {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
    },
];

const initialEdges = [];
let nodeId = 0;
function Flow() {
    const reactFlowInstance = useReactFlow();
    const onClick = useCallback(() => {

        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: {
                x: Math.random() * 500,
                y: Math.random() * 500,
            },
            data: {
                label: `Node ${id}`,
            },
        };
        reactFlowInstance.addNodes(newNode);
    }, [reactFlowInstance]);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => {
            // console.log("12121",nds)
            applyNodeChanges(changes, nds)
        }),
        []
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges(
            (eds) => {
                // console.log("1212313",eds)
                applyEdgeChanges(changes, eds)
            }
        ),
        []
    );

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    return (
        <div style={{ height: '100%' }}>
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes={nodes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Background />
                <Controls />
            </ReactFlow>
            <button onClick={onClick} className="btn-add">
                add node
            </button>
        </div>

    );
}

export default () => {
    return (
        <ReactFlowProvider>
                <Flow/>
        </ReactFlowProvider>
    );
}
