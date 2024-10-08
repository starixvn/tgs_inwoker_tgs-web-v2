const partners = [
  { name: "Partner 1", logo: "logo1.png", link: "https://partner1.com" },
  { name: "Partner 2", logo: "logo2.png", link: "https://partner2.com" },
  { name: "Partner 3", logo: "logo3.png", link: "https://partner3.com" },
];

export const Partners = () => {
  return (
    <div className="w-full">
      {/* <h2>Our Partners</h2>
            <div className="partners-list">
                {partners.map((partner, index) => (
                    <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-item">
                        <img src={partner.logo} alt={partner.name} className="partner-logo" />
                        <p>{partner.name}</p>
                    </a>
                ))}
            </div> */}
    </div>
  );
};
