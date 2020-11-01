// import React, { useCallback } from "react";
// import "./styles.css";

// import {useDropzone} from "react-dropzone";

// document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
//     const dropZoneElement = inputElement.closest(".drop-zone");
  
//     dropZoneElement.addEventListener("click", (e) => {
//       inputElement.click();
//     });
  
//     inputElement.addEventListener("change", (e) => {
//       if (inputElement.files.length) {
//         updateThumbnail(dropZoneElement, inputElement.files[0]);
//       }
//     });
  
//     dropZoneElement.addEventListener("dragover", (e) => {
//       e.preventDefault();
//       dropZoneElement.classList.add("drop-zone--over");
//     });
  
//     ["dragleave", "dragend"].forEach((type) => {
//       dropZoneElement.addEventListener(type, (e) => {
//         dropZoneElement.classList.remove("drop-zone--over");
//       });
//     });
  
//     dropZoneElement.addEventListener("drop", (e) => {
//       e.preventDefault();
  
//       if (e.dataTransfer.files.length) {
//         inputElement.files = e.dataTransfer.files;
//         updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
//       }
  
//       dropZoneElement.classList.remove("drop-zone--over");
//     });
//   });
  
//   function updateThumbnail(dropZoneElement, file) {
//     let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
//     // First time - remove the prompt
//     if (dropZoneElement.querySelector(".drop-zone__prompt")) {
//       dropZoneElement.querySelector(".drop-zone__prompt").remove();
//     }
  
//     // First time - there is no thumbnail element, so lets create it
//     if (!thumbnailElement) {
//       thumbnailElement = document.createElement("div");
//       thumbnailElement.classList.add("drop-zone__thumb");
//       dropZoneElement.appendChild(thumbnailElement);
//     }
  
//     thumbnailElement.dataset.label = file.name;
  
//     // Show thumbnail for image files
//     if (file.type.startsWith("image/")) {
//       const reader = new FileReader();
  
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
//       };
//     } else {
//       thumbnailElement.style.backgroundImage = null;
//     }
//   }
  

// const Dragndrop = () => {
//     const onDrop = useCallback((acceptedFiles) => {
//         acceptedFiles.forEach((file) => {
//           const reader = new FileReader()
     
//           reader.onabort = () => console.log('file reading was aborted')
//           reader.onerror = () => console.log('file reading has failed')
//           reader.onload = () => {
//           // Do whatever you want with the file contents
//             const binaryStr = reader.result
//             console.log(binaryStr)
//           }
//           reader.readAsArrayBuffer(file)
//         })
        
//       }, [])
//       const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
     
//       return (
//         <div className="dropzone">
//         <div
//         {...getRootProps({
//             refKey: 'innerRef',
//             onClick: event => console.log(event)
//         })}
//         />
//           <input {...getInputProps()} />
//           {
//             isDragActive ?
//               <p>Drop the files here ...</p> :
//               <p>Drag 'n' drop some files here, or click to select files</p>
//           }
//         </div>
//       );
    // return (
    //     <div>
    //         <div className="drop-zone">
    //         <span className="drop-zone__prompt">Drop file here or click to upload</span>
    //         <input type="file" name="myFile" class="drop-zone__input"/>
    //         </div>
    //     </div>
    //     );
        
// }


// const Dragndrop = () => {
//   const [fileNames, setFileNames] = useState([]);
//   const handleDrop = acceptedFiles =>
//     setFileNames(acceptedFiles.map(file => file.name));

// return (
//     <div className="App">
//       <Dropzone
//         onDrop={handleDrop}
//         accept="image/*"
//         minSize={1024}
//         maxSize={3072000}
//       >
//         {({
//           getRootProps,
//           getInputProps,
//           isDragActive,
//           isDragAccept,
//           isDragReject
//         }) => {
//           // additional CSS depends on dragging status
//           const additionalClass = isDragAccept
//             ? "accept"
//             : isDragReject
//             ? "reject"
//             : "";

//           return (
//             <div
//               {...getRootProps({
//                 className: `dropzone ${additionalClass}`
//               })}
//             >
//               <input {...getInputProps()} />
//               <span>{isDragActive ? "📂" : "📁"}</span>
//               <p>Drag'n'drop images, or click to select files</p>
//             </div>
//           );
//         }}
//       </Dropzone>
//     </div>
//   );
// }

// export default Dragndrop;