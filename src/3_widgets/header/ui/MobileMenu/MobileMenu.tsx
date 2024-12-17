import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./mobilemenu.css";
import { Button } from "@shared/ui";

type Props = {
  open: boolean;
  setModal: (arg0: boolean) => void;
};

export default function MobileMenu({ open, setModal }: Props) {
  const dialog = useRef<HTMLDialogElement>();

  useEffect(() => {
    if (dialog && dialog.current) {
      if (open) {
        dialog.current.showModal();
      } else dialog.current.close();
      document.body.style.overflow = open ? "hidden" : "unset";
    }
    return () => (document.body.style.overflow = "unset");
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className="mobile-overlay visible-mobile"
    >
      <div className="mobile-overlay__close-button-wrapper">
        <Button
          onClick={() => setModal(false)}
          className="mobile-overlay__close-button cross-button"
        >
          <span className="visually-hidden"> Close navigation menu </span>
        </Button>
      </div>

      <div className="mobile-overlay__body">
        <ul className="mobile-overlay__list">
          <li className="mobile-overlay__item">
            <Link
              to="/schedules"
              onClick={() => setModal(false)}
              className="mobile-overlay__link"
            >
              Расписание
            </Link>
          </li>
          <li className="mobile-overlay__item">
            <Link
              to="/"
              onClick={() => setModal(false)}
              className="mobile-overlay__link"
              draggable="false"
            >
              Кружки
            </Link>
          </li>
          <li className="mobile-overlay__item">
            <Link
              to="/duties"
              onClick={() => setModal(false)}
              className="mobile-overlay__link"
              draggable="false"
            >
              Дежурства
            </Link>
          </li>
          <li className="mobile-overlay__item">
            <Link
              to="/students"
              onClick={() => setModal(false)}
              className="mobile-overlay__link"
              draggable="false"
            >
              Ученики
            </Link>
          </li>
        </ul>
      </div>
    </dialog>,
    document.querySelector("#modal")
  );
}
