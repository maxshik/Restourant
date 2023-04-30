fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    function show() {
      return (
        <div className="products">
          {data.map((d) => (
            <div className="card">
              <span id="name">{d.name}</span> <br />
              <div className="price">
                <div>
                  <img src="../img/price-tag.png" id="price" />
                </div>
                <div id="current">{d.price}</div> <br />
              </div>
              <img src={d.src} id="photo" />
              <div id="composition">{d.composition}</div>
            </div>
          ))}
        </div>
      );
    }
    ReactDOM.render(show(), document.getElementById("root"));
  });