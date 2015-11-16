const BOX_NAME = 'testname';

var CB = React.createClass({
	onCheckClick: function(el) {
    	console.log('clicked '+ el);
    },

	render: function() {
    	const cbs = ['checkbox1', 'checkbox2', 'checkbox3'];
        const list = cbs.map( (el, i) => {
        	return (
                <li key={i}>
            	<input type="checkbox"
                	onClick={ e => this.onCheckClick(el) }
            		name={ BOX_NAME }
                    value={ el } />
                </li>
            );
        }, this);
        
        return (
        	<div>
        		<Nav boxName={ BOX_NAME } />
            	<ul>{ list }</ul>
            </div>
        );
    }
});
 
var Nav = React.createClass({
	handleCheckClick: function() {
    	console.log('select all');
        
        const boxes = document.getElementsByName( this.props.boxName );
		for ( let i = 0; i < boxes.length; i++ ) {
			//boxes[i].checked = checked;
			//boxes[i].onClick(); 
			const evt = new MouseEvent( 'click', {
    			bubbles: true,
    			cancelable: true,
    			view: window,
  			} );
			boxes[i].dispatchEvent( evt );
		}
    },

	render: function() {
    	return <a onClick={ e => this.handleCheckClick() }>select all</a>;
    }
});

ReactDOM.render(
	<CB />,
    document.getElementById('container')
);