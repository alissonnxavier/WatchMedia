import { CardWithForm } from '@/components/AddCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TableDemo } from '@/components/Table';
import { useRouter } from 'next/navigation';
import { DataTable } from '@/app/payments/data-table'
import { columns } from '@/app/payments/columns'

const AddMovie = () => {

  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [videoUrl, setvideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [genre, setgenre] = useState('');
  const [duration, setduration] = useState('');
  const [data, setData] = useState([]);

  const handlerSubmit = async () => {
    try {
      await axios.post('/api/addmovie', {
        title,
        description,
        videoUrl,
        thumbnailUrl,
        genre,
        duration
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  const handleGet = async () => {
    try {
      const res = await axios.post('api/getmovie',
        { message: 'hii' }).then((resolve) => {
          setData(resolve.data)
        })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGet();
  }, [])

  return (
    <>
      <div className='
       p-8
      bg-white 
      justify-center 
      items-center
      text-center 
      
    '>
        <Card className='bg-white w-96 m-auto rounded-xl shadow-xl p-4 border'>
          <CardHeader>
            <CardTitle>
              <Badge variant='secondary' className='bg-red-500 h-7 hover:bg-red-400 align-middle justify-center mt-10'>Add an movie</Badge>
            </CardTitle>
            <CardDescription>Insert o new movie with one-click.</CardDescription>
          </CardHeader>

          <div className='w-80 m-auto'>
            <div className=' '>
              <div className='flex items-center p-3'>
                <Label className='m-3'>Title</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} className='rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type='text' placeholder='' />
              </div>
              <div className='flex items-center p-3'>
                <Label className='m-3'>Description</Label>
                <Input value={description} onChange={(e) => setdescription(e.target.value)} className='rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type='text' placeholder='' />
              </div>
              <div className='flex items-center p-3'>
                <Label className='m-3'>VideoUrl</Label>
                <Input value={videoUrl} onChange={(e) => setvideoUrl(e.target.value)} className='rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type='text' placeholder='' />
              </div>
              <div className='flex items-center p-3'>
                <Label className='m-3'>thumbnailUrl</Label>
                <Input value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} className='rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type='text' placeholder='' />
              </div>
              <div className='flex items-center p-3'>
                <Label className='m-3'>genre</Label>
                <Input value={genre} onChange={(e) => setgenre(e.target.value)} className='rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type='text' placeholder='' />
              </div>
              <div className='flex items-center p-3'>
                <Label className='m-3'>duration</Label>
                <Input value={duration} onChange={(e) => setduration(e.target.value)} className='rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type='text' placeholder='' />
              </div>
            </div>

          </div>
          <div className='justify-start'>
            <Button onClick={handlerSubmit} className='mr-52 justify-start border bg-red-500 rounded hover:bg-green-300 transition' variant='destructive'>
              Send
            </Button>
          </div>

        </Card >
        <div className='bg-white w-3/4 justify-center m-auto pt-5'>
          {/* <TableDemo data={data}></TableDemo> */}
          <div>
            <DataTable searchKey='title' columns={columns} data={data} />
          </div>
        </div>
      </div>


    </>

  )
}

export default AddMovie