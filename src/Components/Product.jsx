import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addcart } from "../redux/action/index";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal, Tooltip } from "antd";
import "antd/dist/antd.css";
import securepartners from "../Assets/Images/secure-partners.png";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
import { products, walletimages } from '../data'


window.Buffer = window.Buffer || require("buffer").Buffer
function Product() {
    window.localStorage.clear();
    let navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState("");
    const [imgData, setImgData] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [newImage, setNewImage] = useState()
    console.log(id, 'id')
    const dispatch = useDispatch()

    const addproduct = (product) => {
        // code for s3 bucket start
        if (selectedImage) {
            var filename = selectedImage.substring(selectedImage.lastIndexOf('/') + 1);
            var file = newImage
            var target = { Bucket: "tangibletokensbucket", Key: filename, Body: file, ContentType: "image/*" };
            const creds = { accessKeyId: "AKIAYDSH4PMZURNSFB76", secretAccessKey: "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" }
            try {
                const parallelUploads3 = new Upload({
                    client: new S3Client({ region: "us-east-1", credentials: creds }),
                    leavePartsOnError: false,
                    params: target,
                });
                parallelUploads3.on("httpUploadProgress", (progress) => {
                    console.log(progress, 'progress');
                });
                parallelUploads3.done();
            } catch (e) {
                console.log(e);
            }
        }
        // code for s3 bucket end
        setProduct({ ...product, selectedSize, selectedValue, selectedImage, variatioPrice });
        dispatch(addcart({ ...product, selectedSize, selectedValue, selectedImage, variatioPrice }))
        // console.log({...product, selectedSize, selectedValue}, 'product')
        if (product) {
            navigate("/cart");
        }
    }
    const newproduct = products.find(x => x.id == id);
    console.log(newproduct, 'newproduct')
    useEffect(() => {
        setProduct(newproduct);
    }, [id]);



    // increament deacrement counter
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    // modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // end modal

    useEffect(() => {
        setImgData();
        setShow(false)
        setselectedImage()
    }, [id]);


    const [selectedSize, setselectedSize] = useState(1)
    const [selectedValue, setselectedValue] = useState(1)
    const [selectedThumb, setselectedthumb] = useState('0')
    function ColorChange(id) {
        setselectedValue(id)

    }
    function sizeChange(id) {
        setselectedSize(id)

    }
    function ThumbnailChange(id) {
        setselectedValue(id)
        setselectedSize(id)
    }
    const [show, setShow] = useState(false);
    const [nftimages, setNftImages] = useState(walletimages);
    const [selectedImage, setselectedImage] = useState('')
    function selectedImageFunc(url) {
        setselectedImage(url)
    }
    console.log(selectedImage, 'selectedImage')

    // convert selcted image into object for s3 bucket start
    useEffect(() => {
        if (selectedImage != "undefined") {
            let url = `http://localhost:3000${selectedImage}`
            console.log(url, 'url')
            const toDataURL = url => fetch(url)
                .then(response => response.blob())
                .then(blob => new Promise((resolve, reject) => {
                    const reader = new FileReader()
                    reader.onloadend = () => resolve(reader.result)
                    reader.onerror = reject
                    reader.readAsDataURL(blob)
                }))

            const name = "ff.png"
            function dataURLtoFile(dataurl, filename) {
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new File([u8arr], filename, { type: mime });
            }
            toDataURL(url)
                .then(dataUrl => {
                    // console.log('Here is Base64 Url', dataUrl)
                    var fileData = dataURLtoFile(dataUrl, name);
                    console.log("Here is JavaScript File Object", fileData)
                    setNewImage(fileData)
                    // fileArr.push(fileData)
                })
            //   remove all into image url only show image name

        }
    }, [selectedImage])
    // convert selcted image into object for s3 bucket end

    //   remove all into image url only show image name
    useEffect(() => {
        setselectedImage(selectedImage.substring(selectedImage.lastIndexOf('/') + 1));
    })

    const [variatioPrice, setvariatioPrice] = useState("0")
    useEffect(() => {
        product && product.size.find((res) => {
            return (
                selectedSize === res.id ? setvariatioPrice(res.price) : ""
            );
        })
    }, [selectedSize])

    const [posTop, setTop] = useState("12")
    const [posLeft, setLeft] = useState("45")
    const [poswidth, setWidth] = useState("34")
    const [posHeight, setHeight] = useState("35")

    useEffect(() => {
        product && product.size.map((res) => {
            return (
                <>
                    {res.id === selectedSize ? setTop(res.json_top) : null}
                    {res.id === selectedSize ? setLeft(res.json_left) : null}
                    {res.id === selectedSize ? setWidth(res.json_width) : null}
                    {res.id === selectedSize ? setHeight(res.json_height) : null}
                </>
            )
        })
    }, [selectedSize])
    return (
        <>
            <div className="single-product-sec pt-5 pb-5">
                <div className="container-wrap">
                    <div className="product-row row">
                        {product ? (
                            <div className="single-photo-product col-md-6">
                                {product.size.length != 0 && product.color.length === 0 ?
                                    product.thumbnails.map((res) => {
                                        return (
                                            <div key={res.id}>
                                                {res.id === selectedSize ? <img src={`/${res.url}`} alt="ShirtBlack" /> : null}
                                            </div>
                                        )
                                    }) : ""}
                                {product.color.length != 0 && product.size.length === 0 ?
                                    product.thumbnails.map((res) => {
                                        return (
                                            <div key={res.id}>
                                                {res.id === selectedValue ? <img src={`/${res.url}`} alt="ShirtBlack" /> : null}
                                            </div>
                                        )
                                    }) : ""}
                                {product.color.length != 0 && product.size.length != 0 ?
                                    product.thumbnails.map((res) => {
                                        return (
                                            <div key={res.id}>
                                                {res.id === selectedValue ? <img src={`/${res.url}`} alt="ShirtBlack" /> : null}
                                            </div>
                                        )
                                    }) : ""}

                                <div className="thumbnail-imgs row d-flex gx-2 gy-2 pt-4">
                                    {product.thumbnails.map((res) => {
                                        return (
                                            <div key={res.id}>
                                                <p className="col" onChange={() => ThumbnailChange(res.id)}>
                                                    <input
                                                        type="radio"
                                                        name="image"
                                                        defaultChecked={selectedThumb === res.id}
                                                        value={res.id} />
                                                    <img
                                                        src={`/${res.url}`}
                                                        alt={product.title}
                                                        key={res.id}
                                                    />
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        )
                            : (
                                ""
                            )}
                        <div className="prodcut-description col-md-6">
                            <h2>
                                <b>{product.title}</b>
                            </h2>
                            {product ? (
                                <h2 className="product-price pb-4">$
                                    {product.size.length != 0 ?
                                        product.size.map((res) => {
                                            return (
                                                selectedSize === res.id ? res.price : ""
                                            );
                                        })
                                        :
                                        product.price
                                    }
                                </h2>) : ""}
                            {product ? (
                                <div className="product-inn-details">
                                    {product.size ? (
                                        <div className="size pt-4">
                                            <label className="size-lable bold-txt">{product.size.length != 0 ? "Size" : ""}</label>
                                            <div className="size-container">
                                                {product ? (
                                                    <div className="size-elements">
                                                        {product.size.map((res) => {
                                                            return (
                                                                <div className="size-element" key={res.id} onChange={() => sizeChange(res.id)}>
                                                                    <input defaultChecked={selectedSize === res.id} type="radio" name="size" value={res.id} />
                                                                    <label htmlFor={res.type}>{res.type}</label>
                                                                </div>
                                                            );
                                                        })}

                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {product.color ?
                                        <div className="color pt-4">
                                            <label className="color-lable bold-txt">Color</label>
                                            <div className="color-container">
                                                <div className="color-elements">
                                                    {product ? (
                                                        <div className="size-elements">
                                                            {product.color.map((res) => {
                                                                return (
                                                                    <div className="color-element"
                                                                        onChange={() => ColorChange(res.id)} key={res.id}>
                                                                        <Tooltip title={res.color_name}>
                                                                            <input defaultChecked={selectedValue === res.id} type="radio" name="color" value={res.id} />
                                                                            <label htmlFor={res.color_name} className={selectedValue === res.id ? `checked_label ${res.color_name}` : res.color_name} ></label>
                                                                        </Tooltip>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        : ""}
                                    <div className="quantity pt-4">
                                        <label className="color-lable bold-txt">Quantity</label>
                                        <div className="productarea">
                                            <button className="productminus" onClick={() => handleQuantity("dec")}>
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>

                                            <span className="product-detail-amount product__quat">{quantity}</span>
                                            <button className="productplus" onClick={() => handleQuantity("inc")}>
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>

                                        </div>
                                    </div>
                                </div>) : ""}
                            <button
                                className="btn btn-primary personalize my-4"
                                type="submit"
                                onClick={showModal}
                            >
                                Personalize
                            </button>
                            <img
                                src={securepartners}
                                alt="securepartners"
                                className="securepartners"
                            />
                            <Modal
                                visible={isModalVisible}
                                onCancel={handleCancel}
                                className="cart-popup"
                            >
                                <div className="row">
                                    <div className="col-md-6 left-popup-sec">
                                        {product ? (
                                            <div className="size-elements edit-img">
                                                {/* {selectedThumb == "1" && selectedValue == "0" ? <img src={product.images} alt="ShirtBlack" /> : "" } */}
                                                {product.size.length != 0 && product.color.length === 0 ?
                                                    product.thumbnails.map((res) => {
                                                        return (
                                                            <div key={res.id}>
                                                                {res.id === selectedSize ? <img src={`/${res.url}`} alt="ShirtBlack" /> : null}
                                                            </div>
                                                        )
                                                    }) : ""}
                                                {product.color.length != 0 && product.size.length === 0 ?
                                                    product.thumbnails.map((res) => {
                                                        return (
                                                            <div key={res.id}>
                                                                {res.id === selectedValue ? <img src={`/${res.url}`} alt="ShirtBlack" /> : null}
                                                            </div>
                                                        )
                                                    }) : ""}
                                                {product.color.length != 0 && product.size.length != 0 ?
                                                    product.thumbnails.map((res) => {
                                                        return (
                                                            <div key={res.id}>
                                                                {res.id === selectedValue ? <img src={`/${res.url}`} alt="ShirtBlack" /> : null}
                                                            </div>
                                                        )
                                                    }) : ""}
                                                {/* Edit image */}
                                                {selectedImage ?

                                                    <div className="container-select-img text-center"

                                                        style={product.id === 41138846007502 ? {
                                                            position: 'absolute',
                                                            width: `${poswidth}%`,
                                                            left: `${posLeft}%`,
                                                            top: `${posTop}%`,
                                                            height: `${posHeight}%`,
                                                            background: "#fff"
                                                        } : {
                                                            position: 'absolute',
                                                            width: `${product.json_width}%`,
                                                            left: `${product.json_left}%`,
                                                            top: `${product.json_top}%`,
                                                            height: `${product.json_height}%`,
                                                            transform: `rotate(${product.json_transformRotate}deg)`
                                                        }}
                                                    >
                                                        <img src={`/images/${selectedImage}`}  style={product.id === 41138846007502 && selectedSize === 3 ? {
                                                            position: 'relative',
                                                            top: '22px',
                                                        } : null } />

                                                    </div>
                                                    :
                                                    ""

                                                }

                                            </div>
                                        ) : (
                                            ""
                                        )}

                                    </div>
                                    <div className="col-md-6 right-popup-sec mt-4 mt-md-0 px-md-0 px-2 pb-md-0 pb-4">
                                        <div className="option-name pb-2">Image Upload 2</div>
                                        <div className="button-on-dark d-flex">
                                            <div className="fileadd-box">
                                                <button className="btn btn-primary btn-dark select-btn" onClick={() => setShow(!show)}> Select Image</button>
                                            </div>
                                            {selectedImage ? (
                                                <button className="btn btn-primary btn-dark close-controls" onClick={e => setselectedImage("")}>X</button>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        {
                                            show && nftimages ? (
                                                <div className="thumbnail-imgs row d-flex pt-3 box-select-img">
                                                    {nftimages.map((res) => {
                                                        return (
                                                            <div className="modal_thum" key={res.id}>
                                                                <p className="col mb-0 px-1 px-md-2 py-2" onChange={() => selectedImageFunc(`/${res.image_url}`)}>

                                                                    <input
                                                                        type="radio"
                                                                        name="image"
                                                                        defaultChecked={selectedImage === res.id}
                                                                        value={res.id} />
                                                                    <img
                                                                        src={`/${res.image_url}`}
                                                                        alt={res.id}

                                                                    />

                                                                </p>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                ""
                                            )
                                        }
                                        <div>
                                            <div className="option-name pt-2">Image {product.id}</div>
                                            {product ? (
                                                <div className="thumbnail-imgs row d-flex pt-3">
                                                    {product.thumbnails.map((res) => {
                                                        return (
                                                            <div className="modal_thum" key={res.id}>
                                                                <p className="col mb-0 px-1 px-md-2" onChange={() => ThumbnailChange(res.id)}>
                                                                    <Tooltip title={product.title}>
                                                                        <input
                                                                            type="radio"
                                                                            name="image"
                                                                            defaultChecked={selectedThumb === res.id}
                                                                            value={res.id} />
                                                                        <img
                                                                            src={`/${res.url}`}
                                                                            alt={product.title}
                                                                            key={res.id}
                                                                        />
                                                                    </Tooltip>
                                                                </p>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <button
                                            className="btn btn-primary personalize cartpopup-button mt-4 mt-md-0"
                                            type="submit"
                                            onClick={() => addproduct(product)}
                                        >
                                            {product ? (
                                                <span>$
                                                    {product.size.length != 0 ?
                                                        product.size.map((res) => {
                                                            return (
                                                                selectedSize === res.id ? res.price : ""
                                                            );
                                                        })
                                                        :
                                                        product.price
                                                    }
                                                </span>) : ""} - ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
