import './MainComponent.css';

function MainComponent(props){
    return (
        <div className="main-container-component" >
            {props.children}
            {props.children}
        </div>
    );
}

export { MainComponent };
