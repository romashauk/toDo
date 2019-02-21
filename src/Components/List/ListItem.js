import React, { Component } from 'react';
import CloseButton from 'material-ui/svg-icons/navigation/close';
import Pan from 'material-ui/svg-icons/image/edit';
import Save from 'material-ui/svg-icons/content/save';

export default class ListItem extends Component {
  state = {
    editing: false,
  };

  EditTitle = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };
  render() {
    const { title, remove, id, onChange, handleClick, solved } = this.props;
    const { editing, checked } = this.state;
    return (
      <div className="items__container">
        <li className="workSpace__item">
          <input
            className="items__checkbox"
            checked={checked}
            onClick={() => handleClick(id)}
            type="checkbox"
          />
          {!editing ? (
            <div
              className={
                solved ? 'title__container active' : 'title__container'
              }
            >
              {title}
            </div>
          ) : (
            <input
              onChange={e => onChange(id, e.target.value)}
              type="text"
              className="list__field"
              defaultValue={title}
            />
          )}
          {!editing ? (
            <div>
              <Pan className="items__icon" onClick={this.EditTitle} />
              <CloseButton className="list__btn" onClick={() => remove(id)} />
            </div>
          ) : (
            <Save className="items__save" onClick={this.EditTitle} />
          )}
        </li>
      </div>
    );
  }
}
