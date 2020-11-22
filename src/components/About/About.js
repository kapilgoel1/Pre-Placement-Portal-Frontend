import React from "react";
import "./About.css";

import Image from "../../assets/Image1.jpg";

const About = () => {
  return (
    <div>
      <div className="back">
        <img className="img" src={Image} alt={Image} />
        <div className="heading">
          <h1>ABOUT INSTITUTE</h1>
        </div>
        {/* <hr/> */}
      </div>
      <div className="about">
        Jagan Institute of Management Studies (JIMS) imparts professional
        education at post graduate and graduate levels in the fields of
        Management and Information Technology. The Institute has been working
        for the attainment of a mission: to develop highly skilled and
        professional human resource for industry and business for the past 25
        years. Established in 1993, it has now acquired a commendable position
        as one of the premier institutes of the country. Our PGDM, PGDM-IB,
        PGDM-RM Programme are approved by the All India Council for Technical
        Education. PGDM, PGDM-IB & PGDM-RM Programmes are accredited from
        National Board of Accreditation (NBA) for excellence in quality
        education and have also been granted equivalence to MBA degree by
        Association of Indian Universities (AIU). Our GGSIP University
        affiliated programs are MCA, BBA and BCA. The MCA programme is
        accredited by National Board of Accreditation (NBA) for both the shifts.
        The National Assessment and Accreditation council (NAAC) has accredited
        JIMS at A grade.
        <br />
        <br />
        The institute has earned appreciations and accreditations from various
        Govt. Bodies, industry associations and leading newspapers and channels.
        These include NBA, AIU, NAAC, National Institutional Ranking Framework
        (NIRF), FICCI, ASSOCHAM, Times of India, Competition Success Review,
        Business Standard, Business Today, etc.
        <br />
        <br />
        JIMS Rohini has now moved beyond National Recognitions and has got South
        Asian Quality Standards (SAQS) accreditation for quality assurance
        standards. This gives an advantage for increasing international
        visibility among the South Asian Countries.
        <br />
        <br />
        Apart from a leading teaching institution, JIMS is well recognised for
        its empirical and topical research work which benefits the industry,
        corporate and startups directly. JIMS Conducts an AICTE approved
        Doctoral program in management named Fellowship Program in Management
        (FPM) which is equivalent to Ph.D degree.
        <br />
        <br />
        In the first ever NIRF ranking (2016) of teaching plus research
        management institutes, JIMS Rohini was placed on 43rd spot in a list of
        top 50 on all India basis. Since then, JIMS Rohini continues to remain
        in the list of elite B schools of India ( Top 75) in 2017, 2018 and
        2019.
        <br />
        <br />
        Apart from providing gainful and descent placement, JIMS also encourages
        the spirit of entrepreneurship and acts as a incubation centre for
        aspiring entrepreneurs and young startups.
        <br />
        <br />
        JIMS thus proves to be an ideal place for those wishing to engage in
        academic pursuits and seek intellectual fulfilment.
        <br />
      </div>
    </div>
  );
};

export default About;
