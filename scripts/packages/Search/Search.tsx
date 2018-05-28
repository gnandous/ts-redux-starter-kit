import * as React from 'react';
import { Observable } from 'rxjs/Observable';


interface Props {
  onChange: () => void;
};

interface State {}

const styles = {
  display: 'block',
};

export default class SearchInput extends React.Component<Props, State> {
  state = {}
  searchForm: HTMLElement = null

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.createUserInputStream()
      .subscribe(() => {
        // @TODO
      })
  }


  private getRawDomElement(id: string): HTMLElement {
    return document.getElementById(id);
  }

  private createUserInputStream () : Observable<string> {
    this.searchForm = this.getRawDomElement('search');

    if (!this.searchForm) {
      return Observable.throw(new Error('Missing Form'));
    }

    return Observable.fromEvent(this.searchForm, 'keyup')
      .delay(600)
      .map(({ target: { value } }) => value);
  }

  render() {
    return (
      <div style={styles}>
        <h1>INPUT</h1>
      </div>
    )
  }
};
