import "./Chat.css";
import foto from "../images/foto3.png";

const Chat = () => {
  return (
    <section className="chat">
      <section className="container">
        <h2>AMIGOS</h2>
        <div className="chats-container">
          <input type="text" placeholder="añadir amigo..." />
          <div className="chat-friend">
            <img src={foto} alt="" />
            <p>Alberto Perez</p>
          </div>
          <div className="chat-friend">
            <img src={foto} alt="" />
            <p>Alberto Perez</p>
          </div>
          <div className="chat-friend">
            <img src={foto} alt="" />
            <p>Alberto Perez</p>
          </div>
          <div className="chat-friend">
            <img src={foto} alt="" />
            <p>Alberto Perez</p>
          </div>
          <div className="chat-friend">
            <img src={foto} alt="" />
            <p>Alberto Perez</p>
          </div>
        </div>
      </section>
      <section className="container container-chat">
        <h2>CHAT</h2>
      </section>
      <section className="container">
        <h2>PROFILE</h2>
      </section>
    </section>
  );
};

export default Chat;
