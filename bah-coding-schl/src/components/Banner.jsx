import React from "react";
import pro from "././assets/pro.png";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <div className="flex-container">
      <section className="hdr">
        <h1>ODC CODING SCHOOL</h1>
        <p className="para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ipsum
          obcaecati totam culpa quas nobis quaerat saepe. Dignissimos, dolore
          repellat nihil nesciunt sint nisi officiis perferendis facere rerum,
          culpa adipisci.
        </p>

        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quae
          temporibus id? Qui soluta repudiandae quibusdam eveniet distinctio
          quidem fugiat est voluptas temporibus sed, eligendi ullam consectetur
          autem, aperiam dolore?
        </p>
        <Button size="large" variant="contained" disableElevation id="btn">
          Sign UP Now
        </Button>
      </section>

      <section>
        <img src={pro} alt="" />
      </section>
    </div>
  );
};

export default Banner;
