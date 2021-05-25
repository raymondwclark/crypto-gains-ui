import DashboardComponent from './components/DashboardComponent';

function App() {
    return (
        <div style={{padding: '20px'}}>
            <div style={{position: 'fixed', 
            width: '100%', height: '90px', 
            top: '0', left: '0', borderBottom: '1px solid rgb(150, 150, 150)',
            backgroundColor: 'rgb(31, 33, 36)'}}>
                <h1>Crypto Gains</h1>
            </div>
            <DashboardComponent></DashboardComponent>
        </div>
    );
}

export default App;
