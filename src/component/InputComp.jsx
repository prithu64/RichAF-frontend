

function InputComp({label,placeholder,type,onChange}) {
  return (
     <div>
            <label className="block mb-1 dark:text-white/60 text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full px-4 py-2 border rounded-md outline-none  focus:border-blue-400 focus:border-2"
            />
     </div>
  )
}

export default InputComp