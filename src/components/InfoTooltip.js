import '../index.css'
import successIcon from '../images/union.svg';
import failIcon from '../images/UnionFail.svg'

function InfoTooltip({
  name,
  isOpen,
  onCloseByOverlay,
  onClose,
  isTooltipSuccess
}) {
  const infoMessage = isTooltipSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.';
  const infoIcon = isTooltipSuccess ? successIcon : failIcon;

  return (
    <div className={`popup popup_type_${name}` + (isOpen && ' popup_opened')} onClick={onCloseByOverlay}>
      <div className='popup__container popup__container_type_tooltip'>
        <button type="button" aria-label="Закрытие попапа" className="popup__close" onClick={onClose} ></button>
        <img className="popup__info-icon" src={infoIcon} alt="иконка регистрации" />
        <h2 className="popup__info-message">{infoMessage}</h2>
      </div >
    </ div >
  )
}

export default InfoTooltip