import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function App() {
   return (
        <div id="wrapper">
                <Header></Header>
                <main>
                 <aside>
                 <Card form={true}></Card>
                 </aside>
                 <div id="card-display">
                 <Card title="About Thefacebook">
                         <p id="about">[About]</p>
                         <Card title="The Project">
                                <p>
                                        Thefacebook is an online directory that connects people through social networks at colleges and universities
                                </p>
                         </Card>
                         <Card title="The People">
                                
                         </Card>
                         <Button></Button>
                 </Card>
                 <Footer></Footer>
                 </div>
                </main>
        </div>

   )
}
