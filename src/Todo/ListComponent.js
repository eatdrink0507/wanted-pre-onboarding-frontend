import { useState } from "react";

import api from "./api";

export const ListComponent = ({ e, setData }) => {
  const [isEdit, setIsedit] = useState(false);
  const [val, setVal] = useState(e.todo);
  const [isChecked, setIsChecked] = useState(e.isCompleted);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          onClick={() => setIsChecked(!isChecked)}
          defaultChecked={e.isCompleted}
        />
        {isEdit ? (
          <>
            <input
              value={val}
              onChange={(e) => setVal(e.target.value)}
              data-testid="modify-input"
            />
          </>
        ) : (
          <>
            <span>{e.todo}</span>
          </>
        )}
      </label>
      {isEdit ? (
        <>
          <button
            data-testid="submit-button"
            onClick={() => {
              api(
                "put",
                { todo: val, isCompleted: isChecked },
                null,
                e.id
              ).then(() => {
                api("get", "", setData, null);
                setIsedit(false);
              });
            }}
          >
            제출
          </button>
          <button
            data-testid="cancel-button"
            onClick={() => {
              setIsedit(false);
              setVal(e.todo);
              setIsChecked(e.isCompleted);
            }}
          >
            취소
          </button>
        </>
      ) : (
        <>
          <button data-testid="modify-button" onClick={() => setIsedit(true)}>
            수정
          </button>
          <button
            onClick={() =>
              api("delete", null, null, e.id).then(() =>
                api("get", "", setData, null)
              )
            }
            data-testid="delete-button"
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
};
