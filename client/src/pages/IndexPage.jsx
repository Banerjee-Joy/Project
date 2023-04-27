import image_1 from '../images/home-at.webp'
import image_2 from '../images/home-bos.webp'
import image_3 from '../images/home-la.webp'
import image_4 from '../images/home-ny.webp'
import image_5 from '../images/home-ptl.webp'
import image_6 from '../images/home-san.webp'
import image_7 from '../images/home-sancrz.webp'
import image_8 from '../images/home-sde.webp'
import image_9 from '../images/home-stl.webp'
import image_10 from '../images/home-wdc.webp'
        
export default function IndexPage(){
    return(
        <div className='flex flex-col'>
        <div className='flex gap-6 py-10 '>
            <div className='flex flex-col m-4'>
                <img src={image_1} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>Austin, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$135</div>
                    <div>/night</div>
                </div>
            </div>

            <div className='flex flex-col m-4'>
                <img src={image_2} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>Boston, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$120</div>
                    <div>/night</div>
                </div>
            </div>

            <div className='flex flex-col m-4'>
                <img src={image_3} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>Los Angeles, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$180</div>
                    <div>/night</div>
                </div>
            </div>

            <div className='flex flex-col m-4'>
                <img src={image_4} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>New York, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$260</div>
                    <div>/night</div>
                </div>
            </div>

            <div className='flex flex-col m-4'>
                <img src={image_5} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>Portland, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$70</div>
                    <div>/night</div>
                </div>
            </div>
        </div>

        <div className='flex gap-6'>
            <div className='flex flex-col m-4'>
                <img src={image_6} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>San Francisco, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$210</div>
                    <div>/night</div>
                </div>
            </div>

            <div className='flex flex-col m-4'>
                <img src={image_7} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>Santa Cruz, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$125</div>
                    <div>/night</div>
                </div>
            </div>

            <div className='flex flex-col m-4'>
                <img src={image_8} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>San Diego, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$64</div>
                    <div>/night</div>
                </div>
            </div>

            <div className='flex flex-col m-4'>
                <img src={image_9} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>Seattle, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$170</div>
                    <div>/night</div>
                </div>
            </div>

            <div className='flex flex-col m-4'>
                <img src={image_10} alt="house" className='w-64 h-64 rounded-2xl' />
                <div className='px-2 font-bold text-xl'>Washington DC, USA</div>
                <div className='flex px-2'>
                    <div className='font-bold text-lg text-primary'>$245</div>
                    <div>/night</div>
                </div>
            </div>
        </div>

        </div>
    )
}
