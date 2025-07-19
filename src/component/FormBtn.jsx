function FormBtn({label,onClick}) {
  return (
     <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer"
            onClick={onClick}
          >
            {label}
     </button>
  )
}

export default FormBtn