import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextElements";
import { toast } from "react-hot-toast";
import SmallSpinner from "../../components/SmallSpinner";

const SignUp = () => {

    const {userRegister,updatesUserInfo,loading,setLoading} = useContext(AuthContext)

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [uploadPhotoURL,setUploadPhotoURL] = useState()
    

    const handleSignUp = (data) => {
    const {name,email,userType,userPhoto,password}=data;
    
 
        const userData = {
            name,
            email,
            userType,
            userImage:uploadPhotoURL,
            password
        }

        userRegister(email, password)
        .then(result => {
            const user = result?.user;
            // profile updates by dispalyName (firebase)
            updatesUserInfo(name)
            // call imgBB function
            const uploadedImage = userPhoto[0];
            uploadPhoto(uploadedImage)
            // console.log(user);
            setLoading(false)
            reset()
            toast.success("User Register Successfully")
        })
        .catch(err => {
            toast.error(err.message)
            // console.log(err.message)
        })

        
    }



    // upload the user image to imagBB to get the url for save data in database
    const uploadPhoto=(image)=>{
        const apiKey = 'b1668bca15c70ef4cb7797c42ee66610'
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
        const formData = new FormData();
        formData.append('image', image);
  
        fetch(url, {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(result => {
            // set the url in a state
            setUploadPhotoURL(result.data.url)
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }





    return (
       <div className=' bg-amber-900 py-6'>
         <div className='container px-6 py-6 mx-auto'>
            <div className="w-full m-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">SignUp First</h1>
                <form onSubmit={handleSubmit(handleSignUp)}  className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Username</label>
                        <input type="text" {...register('name',{required:'required'})} placeholder="Username" className="w-full px-4 py-3 rounded-md bg-gray-600 text-gray-100 border-violet-400" />
                        {errors?.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Email</label>
                        <input type="email" {...register('email',{required:'required'})} placeholder="Email" className="w-full px-4 py-3 rounded-md  bg-gray-600 text-gray-100 border-violet-400" />
                        {errors?.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Upload your photo</label>
                        <input type="file" {...register('userPhoto',{required:'required'})} className="file-input file-input-ghost w-full px-4 rounded-md  bg-gray-600 text-gray-400 border-violet-400" />
                        {errors?.userPhoto && <p className="text-red-600">{errors.userPhoto?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Select User Type</label>
                        <select {...register('userType',{required:"you must put the type info"})} className="select select-bordered text-gray-400 bg-gray-600 w-full ">
                            
                            <option>Regular</option>
                            <option>Seller</option>
                            <option>Buyer</option>
                        </select>
                        {errors?.userType && <p className="text-red-600">{errors.userType?.message}</p>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Password</label>
                        <input type="password" 
                        {...register('password',{
                            required:'required', 
                           
                            minLength: {
                                value: 6,
                                message: "password must be 6 characters"
                            }
                        })} 

                        placeholder="Password" className="w-full px-4 py-3 rounded-md bg-gray-600 text-gray-100 border-violet-400" />
                        {errors?.password && <p className="text-red-600">{errors.password?.message}</p>}

                       
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-600 bg-amber-400">
                        {
                        loading? <SmallSpinner></SmallSpinner> : 'SignUp'
                        }
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
               
                <p className="text-xs text-center sm:px-6 text-gray-400">Allready have an account?
                    <Link to='/signIn' className="underline text-gray-100">Sign In</Link>
                </p>
            </div>
        </div>
       </div>
    );
};

export default SignUp;