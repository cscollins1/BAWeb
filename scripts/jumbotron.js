class Jumbotron extends React.Component {
    render(){
        return(
            <div>
                <button onclick="">Prev</button>
                <div id="jumbotron-spinner" class="spinner"></div>
                <button>Next</button>
            </div>
        )
    }
}

ReactDOM.render(<Jumbotron />, document.getElementById('jumbtron'));
