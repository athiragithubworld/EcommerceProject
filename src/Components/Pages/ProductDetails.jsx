import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = () => {
  const { id } = useParams();
  // const params = useParams();
  // console.log("a", params);
  // console.log("b", { id });
  // console.log("c", id);

  const productsArr = [
    {
      id: "1",
      name: "Album 1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "2",
      name: "Album 2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "3",
      name: "Album 3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "4",
      name: "Album 4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  console.log("pdid");
  const productDetail = productsArr.filter((item) => item.id === id);
  // cartitems.filter((pdt) => pdt.id !== product.id);

  return (
    <>
      <div className={classes.container}>
        {productDetail.map((item) => {
          return (
            <div>
              {/* imageMagnifier */}
              {/* <img
                width={500}
                height={500}
                alt="500x500"
                src={item.imageUrl}
                className={classes.image}
              ></img> */}

              <ReactImageMagnify
                className={classes.image}
                style={{ width: "700px", height: "700px" }}
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: item.imageUrl,
                  },
                  largeImage: {
                    src: item.imageUrl,
                    width: 1200,
                    height: 700,
                  },
                }}
              />
              <div>
                <h2 style={{ paddingTop: "15px", alignItems: "center" }}>
                  {item.name}
                </h2>
              </div>
              <p className={classes.paragraph}>{item.title}</p>
              <p>
                <span className={classes.rating}>
                  <span> 4.5 </span>

                  <img
                    width={30}
                    height={30}
                    alt="400x400"
                    style={{ paddingBottom: "8px" }}
                    src="/images/whitestar5.png"
                  />
                </span>
              </p>
              <div>
                <h3>$ {item.price}</h3>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Description : </div>
                <span style={{ fontSize: "20px" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  deserunt expedita ea eaque quidem sequi debitis delectus ad
                  recusandae blanditiis eos, illum autem adipisci placeat eum
                  vitae dolore ullam labore, alias exercitationem ab quae modi
                  neque? Quidem blanditiis incidunt, dolor maxime harum quo
                  exercitationem, provident est deserunt, tempore culpa
                  architecto?
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetails;
