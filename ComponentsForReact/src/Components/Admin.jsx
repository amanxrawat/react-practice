import { useForm } from "react-hook-form";
import React from 'react'

function Admin() {
  return (
    <>
    <div className="main flex text-black m-5">
        <div className="left-pannel" >
            <div className="">
                <h1> Add Product </h1>
            </div>
            <div className="">
                <h1> Show All Products </h1>
            </div>
            <div className="">
                <h1> Search Product </h1>
            </div>

        </div>

        <div className="right-pannel ">
            <h1 className=" text-5xl font-semibold">Aurrna</h1>

        </div>

    </div>
    </>
  )
}

export default Admin