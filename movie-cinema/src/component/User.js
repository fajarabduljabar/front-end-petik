const User = (props) => {
  const { nama, alamat, angkatan, hobi, status, button, gambar } = props;
  return (
    <div>
      <ul>
        <img src={gambar} alt="" width={264}/>
        <li>Nama : {nama}</li>
        <li>Alamat : {alamat}</li>
        <li>Angkatan : ke-{angkatan}</li>
        <li>Hobi : {hobi.map((hobi) => hobi + ", ")}</li>
        <li>Status : {status ? "lulus" : "sedang belajar"}</li>
        <button onClick={button}>Message</button>
      </ul>
    </div>
  );
};

export default User;
