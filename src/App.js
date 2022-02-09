/**
 * Created by Md. Moshfiqur Rahman Rony
 * @moshfiqrony
 * moshfiqrony
 */

const App = () => {
  return (
    <img
      alt="iamge"
      src="s"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
      }}
    />
  );
};

export default App;
