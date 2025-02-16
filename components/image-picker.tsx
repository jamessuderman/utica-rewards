"use client"

import {Button} from '@/components/ui/button';
import {RefObject, useRef, useState} from 'react';
import Image from 'next/image';

export default function ImagePicker({label, name}: { label: string, name: string }) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const imageSelect: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  function handleImageSelect() {
    imageSelect.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if(!file) return;

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setSelectedImage(fileReader.result.toString());
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <div>
        {selectedImage && (
          <Image className="rounded-lg" src={selectedImage} alt="Program Image" width={250} height={250} />
        )}
      </div>
      <div>
        <input ref={imageSelect} className="hidden" type='file' name={name} id={name}
               accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange}/>
        <Button className="bg-muted text-white" type="button" onClick={handleImageSelect}>Select Image</Button>
      </div>
    </div>
  )
};
