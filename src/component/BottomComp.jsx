import { Link } from "react-router"

function BottomComp({text,Pagelabel,to}) {
  return (
    <div>
         <h1 className="text-center">{text} <Link to={to} className="underline text-blue-600">{Pagelabel}</Link> </h1>
    </div>
  )
}

export default BottomComp