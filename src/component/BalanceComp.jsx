function BalanceComp({balance,username}) {

  return (
    <div className="px-2 pt-3 dark:text-white max-w-5xl mx-auto">
       <h1>Hello, {username}</h1>
       <p className="flex " ><h1 className="font-bold mr-2">Your Balance is :</h1> ₹{ balance} </p> 
    </div>
  )
}

export default BalanceComp