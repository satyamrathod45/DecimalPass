    import React , {useState , useEffect } from 'react'
    import { FaSadTear } from 'react-icons/fa';
    import MobileTable from './MobileTable';
    import DesktopTable from './DesktopTable';
    import { notification } from "antd";


    const PassManager = () => {
        const [formInput, setFormInput] = useState({
            site: "",
            username: "",
            password: "",
            id:""
        })
    const [api, contextHolder] = notification.useNotification();

    const [isLoading, setIsLoading] = useState(false)

    const [passArray, setPassArray] = useState([]);
    const [editId, setEditId] = useState(null);
    const [showId, setShowId] = useState(null)

    const handleChange = (e) => {
        // let {name , value} = e.target;
        setFormInput(
            {
                ...formInput,
                [e.target.name] : e.target.value,
                
            }
        )
    }

    const addPass = () => {


        if(!formInput.site || !formInput.username  || !formInput.password) {
            alert("Enter all th details...!!!")
            return
        }
        //Edit Mode
        if(editId!=null) {
            const newPassArr = passArray.map(pass => 
                pass.id === editId ? {...formInput , id:editId} : pass
            )
            setPassArray(newPassArr)
            setFormInput({
                site:"",
                username: "",
                password: ""
            })
            setEditId(null)
            return
        }

        //Create mode
        const newPassArr = [...passArray , {...formInput , id: Date.now()}]
        setPassArray(newPassArr)
        localStorage.setItem('passArr' , JSON.stringify(newPassArr))
        setFormInput({
    site: "",
    username: "",
    password: "",
    });
    api.success({
  message: "Password Added",
  description: "Your password has been saved successfully.",
  placement: "topRight",
});

    }


    useEffect(() => {
    const storedPassArr = JSON.parse(localStorage.getItem("passArr")) || [];
    setPassArray(storedPassArr);
    setIsLoading(true)
    }, []);


    const handleDelete = (id) => {
        const newPassArr = passArray.filter(pass => 
            id !== pass.id
        )
        setPassArray(newPassArr)
            api.error({
  message: "Password Deleted",
  description: "Your password has been Deleted successfully.",
  placement: "topRight",
});
        localStorage.setItem('passArr' , JSON.stringify(newPassArr))
        
    }
    useEffect(
        () => {
            if(!isLoading) return;
            localStorage.setItem('passArr' , JSON.stringify(passArray))
        },
        [passArray , isLoading]
    )
    const  handleEdit = (id) => {
        setEditId(id);
        passArray.find(pass => pass.id === id && setFormInput(pass))
        
    }

    const handleShow = (id) => {
        setShowId(prev => prev==id ? null : id);
    }

    const handleCopy = async (text) => {
        try{
            await navigator.clipboard.writeText(text);
            console.log("coppied");
            
        }catch (e){
console.log(e);

        }
       

    }
    return (

        <section className=' p-2 sm:px-20 text-whit flex flex-col gap-10 text-white text-center'>
            {contextHolder}
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
                >{editId != null ? "Edit": "Add"}Password</button>
                </div>
            </div>

    {
        passArray.length !== 0?<> 
        <DesktopTable passArray={passArray} onDelete={handleDelete} onEdit={handleEdit} editId={editId} isShow={showId} onShow={handleShow} onCopy={handleCopy}/> 
        <MobileTable passArray={passArray} onDelete={handleDelete} onEdit={handleEdit} editId={editId} isShow={showId} onShow={handleShow} onCopy={handleCopy}/> </>: <div className="flex flex-col justify-center items-center">
            <FaSadTear className='text-7xl'/>
            <h1 className='capitalize text-4xl'>No password here</h1>
        </div>
    }



        </section>
    )
    }

    export default PassManager