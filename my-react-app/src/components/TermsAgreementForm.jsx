import { useState } from "react";

const TermsAgreementForm = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  // チェックボックスの状態を更新
  const handleChange = (e) => {
    setIsAgreed(e.target.checked);
  }

  const handleSubmit = (e) => {
    // フォームのデフォルト動作であるページリロードを防ぐ
    e.preventDefault();
    alert("利用規約に同意してフォームを送信しました")
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={handleChange}
        />
        利用規約に同意する
      </label>
      <br />
      <button type="submit" disabled={!isAgreed}>
        送信
      </button>
    </form>
  )
}

export default TermsAgreementForm;