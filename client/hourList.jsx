HourList = React.createClass({

    // render the item component in a separate function
    renderHours: function() {
      // Iterate over this.props.data using the map function. Return the loop
      return this.props.data.map((hour, i) => {
        // Return the HourItem component, pass hour and key to it.
        return <HourItem hour={hour} key={i} />;
      });
    },

    render: function() {
        return (
        <div className="panel panel-default">

          <div className="panel-heading">
            <h3 className="panel-title">History
              <small> click item to delete</small>
            </h3>
          </div>

          <div className="panel-body">
            <ul>
              {this.renderHours()}
            </ul>
          </div>

        </div>
      );

    }
});
