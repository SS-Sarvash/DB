import { useState } from "react";


const Inserter = ({ adder,data }) => {
    const [location, setLocation] = useState("");
    const [component, setComponent] = useState("");
    const [componentType, setComponentType] = useState("");
    let unique_location = [];
    let unique_component = [];
    let unique_component_type = [];
    data.map((val)=>{unique_location.push(val.location),unique_component.push(val.component),unique_component_type.push(val.component_type)})
    // console.log(arr);
    unique_location=unique_location.filter((item,index) => unique_location.indexOf(item) === index);
    unique_component=unique_component.filter((item,index) => unique_component.indexOf(item) === index);
    unique_component_type=unique_component_type.filter((item,index) => unique_component_type.indexOf(item) === index);
    // console.log(unique_location);
    // console.log(unique_component);
    // console.log(unique_component_type);
    const HandleSubmission = (e) => {
        e.preventDefault();
        console.log("Submitted");
        adder({ location, component, componentType });
        console.log(component+" "+componentType);
        setLocation("");
        setComponent("");
        setComponentType("");
        loc.value='';
        comp.value='';
        compt.value='';
        
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-center">Main Table</h1>
                <form onSubmit={HandleSubmission}>
                    {/* <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        
                        <input 
                        id="loc"
                        type="text" 
                        list="location" 
                        placeholder="Enter Location" 
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        onChange={(e) => setLocation(e.target.value)}
                        required/>
                        <datalist id="location" >

                        {unique_location.map((loc)=>(<option value={loc} >{loc}</option>))}

                        </datalist> 
                       
                    </div> */}
 <select className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300 absolute top-0 opacity-0"> 
<option>hello world</option>
</select>

                    <div className="mb-4">
                        <label htmlFor="component" className="block text-sm font-medium text-gray-700">
                            Component
                        </label>
                        <input 
                        // id="comp"
                        type="text" 
                        list="component" 
                        placeholder="Enter Component" 
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        onChange={(e) => setComponent(e.target.value)}
                        
                        required/>
                        <datalist id="component" >

                        {unique_component.map((comp)=>(<option value={comp}  >{comp}</option>))}

                        </datalist> 
                    </div>
                    <div className="mb-4">
                        {/* <label htmlFor="componentType" className="block text-sm font-medium text-gray-700">
                            Component Type
                        </label>
                        <input 
                        id="compt"
                        type="text" 
                        list="componentType" 
                        placeholder="Enter Component Type" 
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        onChange={(e) => setComponentType(e.target.value)}
                        required/>
                        <datalist id="componentType" >

                        {data.map((compt)=>(<option value={compt.component_type} key={compt.component_type} >{compt.component_type}</option>))}

                        </datalist>  */}
                        <label htmlFor="componentType" className="block text-sm font-medium text-gray-700">
                            Component Type
                        </label>
                        <input 
                        id="compt"
                        type="text" 
                        list="componenttype" 
                        placeholder="Enter Component Type" 
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        onChange={(e) => setComponentType(e.target.value)}
                        required/>
                        <datalist id="componenttype" >

                        {unique_component_type.map((compt)=>(<option value={compt}  >{compt}</option>))}

                        </datalist> 
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Insert
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Inserter;
