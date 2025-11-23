import "./outercontainer.css";
const Outercontainer=({children})=>{
    return(
            <div  className="parent">
                 {children}
             </div>
    )
}
export default Outercontainer;