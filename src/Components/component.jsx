function Component({title,desc,price,time}) {
  function onhandle(){
    alert(`you have applied for ${title}`);
  }
  return (
     <div className="card m-3 shadow" style={{ width: "22rem" }}>
      <div className="card-body">
        
        {/* Title */}
        <h5 className="card-title">{title}</h5>

        {/* Time */}
        <h6 className="text-muted">{time}</h6>

        {/* Description */}
        <p className="card-text">{desc}</p>

        {/* Price */}
        <h6 className="text-success">${price}/hour</h6>

        {/* Button */}
        <button className="btn btn-primary w-100 mt-2" onClick={onhandle}>
          Apply Now
        </button>

      </div>
    </div>
  )
}

export default Component;