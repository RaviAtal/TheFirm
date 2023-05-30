import React from "react";
import meeting_pepol from "../assets/img/png/meeting_pepol.png";
import c_img from "../assets/img/png/C_img.png";

const Hero = () => {
  return (
    <>
      <section className="bg_hero position-relative">
        <div className="container position-relative">
          <div className="row align-items-center flex-column-reverse flex-lg-column py-3 py-lg-0 align-content-start">
            <div className="col-lg-6 z_index_2 position-relative">
              <img
                className=" position-absolute w-25 pos_00"
                src={c_img}
                alt="c_img"
              />
              <div className="h_lg_650 d-flex flex-column justify-content-center py-5 py-lg-0">
                <h1 className=" ff_Nunito fw_900 fs_sm m-0 pb-1">
                  Get Bussiness <br /> Solutions with TheFirm.
                </h1>
                <p className=" ff_Lora fs_xsm fw-normal col-lg-8 m-0 pt-4 pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <button className="mt-4 bg_yellow text-white border-0 rounded-2 py-2 px-4 w_157 ff_Nunito fs_xsm fw-bold">
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="col-lg-6 z_index_2 z_index_lg_1">
              <div className="position_lg_absolute top-0 left_40 ">
                <img
                  className="w_lg_max_100 rounded-5 shadow_01"
                  src={meeting_pepol}
                  alt="meeting_pepol"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
