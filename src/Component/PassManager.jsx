import React , {useState , useEffect} from 'react'
import { FiEye, FiCopy, FiEdit2, FiTrash2 } from "react-icons/fi";
import { FaSadTear } from 'react-icons/fa';

const PassManager = () => {
    const [formInput, setFormInput] = useState({
        site: "",
        username: "",
        password: "",
    })

    const [passArray, setPassArray] = useState([])

const handleChange = (e) => {
    // let {name , value} = e.target;
    setFormInput(
        {
            ...formInput,
            [e.target.name] : e.target.value

        }
    )
}

const addPass = () => {
    if(!formInput.site || !formInput.username  || !formInput.password) {
        alert("Enter all th details...!!!")
        return
    }
    const newPassArr = [...passArray , formInput]
    setPassArray(newPassArr)
    localStorage.setItem('passArr' , JSON.stringify(newPassArr))
}


useEffect(() => {
  const storedPassArr = JSON.parse(localStorage.getItem("passArr")) || [];
  setPassArray(storedPassArr);
}, []);


  return (
    <section className=' p-2 sm:px-20 text-whit flex flex-col gap-10 text-white text-center'>
        <h1 className='text-white text-4xl font-extralight'>Pass Manager</h1>
        <div className="input-container w-full mx-auto flex flex-col gap-3">
            <div className="email-input flex w-full justify-center">
                <input type="text" className='border-2 border-white focus:outline-none w-[81%] p-3 rounded' placeholder='Enter Site....' name='site' value={formInput.site} onChange={handleChange}/>
            </div>
            <div className="user-pass-input flex flex-wrap justify-center gap-3 w-full">
<input type="text" className='border-2 border-white focus:outline-none p-3 rounded w-[40%] ' placeholder='Enter username....' name='username' value={formInput.username} onChange={handleChange}/>
<input type="text" className='border-2 border-white focus:outline-none p-3 rounded w-[40%] ' placeholder='Enter Password....' name='password' value={formInput.password} onChange={handleChange}/>
            </div>
            <div className="flex justify-center"> 
            <button className='bg-white max-w-30 py-3 px-2 rounded active:scale-90 text-center text-black'
            onClick={addPass}
            >Add Password</button>
            </div>
        </div>

        <div className="passwrdtest bg-neutral-950 w-full">
            {passArray.length !== 0 ? <table className="w-full border-collapse text-left">
  <thead>
    <tr className="border-b border-[#1f2430] text-gray-400 uppercase text-sm">
      <th className="p-4">Site</th>
      <th className="p-4">Username</th>
      <th className="p-4">Password</th>
      <th className="p-4 text-right">Actions</th>
    </tr>
  </thead>

  <tbody>
    {passArray.map((item, index) => (
      <tr
        key={index}
        className="odd:bg-[#0f1117] even:bg-[#141826] hover:bg-[#1b2030] transition"
      >
        <td className="p-4 text-white">{item.site}</td>
        <td className="p-4 text-gray-300">{item.username}</td>
        <td className="p-4 text-gray-400 tracking-widest">
          ••••••••
        </td>

        <td className="p-4">
          <div className="flex justify-end gap-4 text-gray-400">
            <FiEye className="cursor-pointer hover:text-white transition" />
            <FiCopy className="cursor-pointer hover:text-blue-400 transition" />
            <FiEdit2 className="cursor-pointer hover:text-yellow-400 transition" />
            <FiTrash2 className="cursor-pointer hover:text-red-500 transition" />
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table> : <div className='flex flex-col justify-center items-center text-gray-300 gap-3 mt-4 opacity-20'>
    <FaSadTear  className='text-8xl '/>
    <h1 className='text-3xl text-gray-300'>No Password here</h1>
    </div>}



        </div>
    </section>
  )
}

export default PassManager