import User from "../User/User.js";
import {  } from "./Main.css";
import Car from "./../Car/Car.js";
import alphard from "../alphard.jpeg"
import fr from "../ferrari.jpeg"
import ftr from "../fortuner.jpeg"
import lmgn from "../lambo.jpeg"
import bgt from "../Bugatti.webp"
import kns from "../koenigsegg.jpeg"
import pjr from "../pajero.jpeg"
import psc from "../porsche.jpeg"


const Main = () => {
    return (
        <div className="content">
              {/* <User nama="Rafi" member="Gold"/>
              <User nama="Nabil" member="Gold"/>
              <User nama="Kakang" member="Silver"/>
              <User nama="Adi" member="Platinum"/>
              <User nama="Budi" member="Silver"/>
              <User nama="Angga" member="Platinum"/>
              <User nama="Rina" member="Platinum"/>
              <User nama="Aulia" member="Gold"/>
              <User nama="Rara" member="Silver"/>
              <User nama="Fahmi" member="Gold"/> */}
              <Car man={alphard} merk="Alphard" harga="3" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={lmgn} merk="Lamborghini" harga="4" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={fr} merk="Ferrari" harga="5" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={pjr} merk="Pajero Sport" harga="1" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={kns} merk="Koenigsegg" harga="2" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={psc} merk="Porsche" harga="4" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={bgt} merk="Bugatti" harga="5" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={ftr} merk="Fortuner" harga="1" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
        </div>
    )
}

export default Main;