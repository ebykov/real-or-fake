import '../css/special.styl';

import BaseSpecial from './base';
import Data from './data';
import Svg from './svg';
import { makeElement, removeChildren } from './lib/dom';
import * as Analytics from './lib/analytics';
import * as Share from './lib/share';

const CSS = {
  main: 'rof',
};

const EL = {};

class Special extends BaseSpecial {
  constructor(params = {}) {
    super();

    Object.assign(this.params, params);
    this.saveParams();

    if (Data && params.data) {
      Object.assign(Data, params.data);
    }

    if (this.params.css) {
      this.loadStyles(this.params.css).then(() => this.init());
    } else {
      this.init();
    }
  }

  createElements() {
    EL.main = makeElement('div', CSS.main);
    EL.mBg = makeElement('div', `${CSS.main}__bg`);
    EL.mInner = makeElement('div', `${CSS.main}__inner`);

    EL.main.appendChild(EL.mBg);
    EL.main.appendChild(EL.mInner);

    EL.enter = makeElement('div', `${CSS.main}-enter`);
    Data.images.forEach((item, i) => {
      const eImg = makeElement('img', [`${CSS.main}-enter__img`, `${CSS.main}-enter__img--${i + 1}`], {
        src: item,
      });
      EL.enter.appendChild(eImg);
    });
    EL.eInner = makeElement('div', `${CSS.main}-enter__inner`);
    EL.eHeadline = makeElement('div', `${CSS.main}-enter__headline`, {
      textContent: 'тест',
    });
    if (this.params.isFeed) {
      EL.eTitle = makeElement('a', `${CSS.main}-enter__title`, {
        href: `/${this.params.articleId}`,
        textContent: Data.title,
      });
    } else {
      EL.eTitle = makeElement('div', `${CSS.main}-enter__title`, {
        textContent: Data.title,
      });
    }
    EL.eText = makeElement('div', `${CSS.main}-enter__text`, {
      innerHTML: Data.text,
    });
    EL.eBtn = makeElement('button', `${CSS.main}-enter__btn`, {
      data: {
        click: 'start',
        caption: 'Обманите меня',
        hoverCaption: 'Обнимите меня',
      },
    });

    EL.eInner.appendChild(EL.eHeadline);
    EL.eInner.appendChild(EL.eTitle);
    EL.eInner.appendChild(EL.eText);
    EL.eInner.appendChild(EL.eBtn);

    EL.enter.appendChild(EL.eInner);

    EL.test = makeElement('div', `${CSS.main}-test`);

    EL.tHeader = makeElement('div', `${CSS.main}-test__header`);
    EL.tPages = makeElement('div', `${CSS.main}-test__pages`);
    EL.tTitle = makeElement('div', `${CSS.main}-test__title`, {
      textContent: 'Фейк или правда?',
    });

    EL.tHeader.appendChild(EL.tPages);
    EL.tHeader.appendChild(EL.tTitle);

    EL.tBody = makeElement('div', `${CSS.main}-test__body`);
    EL.tQuestion = makeElement('div', `${CSS.main}-test__question`);
    EL.tOptions = makeElement('div', `${CSS.main}-test__options`);

    EL.tBody.appendChild(EL.tQuestion);
    EL.tBody.appendChild(EL.tOptions);

    EL.tAnswer = makeElement('div', `${CSS.main}-test__answer`);
    EL.tAnswerText = makeElement('div', `${CSS.main}-test__answer-text`);
    EL.tBtn = makeElement('button', `${CSS.main}-test__btn`, {
      textContent: 'Далее',
      data: {
        click: 'continue',
      },
    });

    EL.tAnswer.appendChild(EL.tAnswerText);
    EL.tAnswer.appendChild(EL.tBtn);

    EL.test.appendChild(EL.tHeader);
    EL.test.appendChild(EL.tBody);

    EL.result = makeElement('div', `${CSS.main}-result`);
    EL.rImg = makeElement('img', `${CSS.main}-result__img`);
    EL.rInner = makeElement('div', `${CSS.main}-result__inner`);
    EL.rResult = makeElement('div', `${CSS.main}-result__result`);
    EL.rTitle = makeElement('div', `${CSS.main}-result__title`);
    EL.rShare = makeElement('div', `${CSS.main}-result__share`);
    EL.rRestart = makeElement('div', `${CSS.main}-result__restart`, {
      innerHTML: `<span>Пройти еще раз</span>${Svg.refresh}`,
      data: {
        click: 'restart',
      },
    });

    EL.rInner.appendChild(EL.rResult);
    EL.rInner.appendChild(EL.rTitle);
    EL.rInner.appendChild(EL.rShare);
    EL.rInner.appendChild(EL.rRestart);

    EL.result.appendChild(EL.rImg);
    EL.result.appendChild(EL.rInner);

    EL.mInner.appendChild(EL.enter);
  }

  static getResult(score) {
    let result = '';
    let index = 0;
    Data.results.some((item, i) => {
      if (item.range[0] <= score && item.range[1] >= score) {
        result = item;
        index = i;
        return true;
      }

      return false;
    });

    return { result, index };
  }

  static makeOptions(options) {
    removeChildren(EL.tOptions);

    options.forEach((item, i) => {
      const option = makeElement('div', `${CSS.main}-test__option`, {
        textContent: item.text,
        data: {
          index: i,
          click: 'answer',
        },
      });

      EL.tOptions.appendChild(option);
    });
  }

  start() {
    Analytics.sendEvent('Start');

    EL.mInner.replaceChild(EL.test, EL.enter);

    this.makeNextQuestion();
  }

  makeNextQuestion() {
    const q = Data.questions[this.activeIndex];

    EL.tPages.textContent = `${this.activeIndex + 1}/${Data.questions.length}`;
    EL.tQuestion.innerHTML = q.text;
    Special.makeOptions(q.options);
  }

  answer(el) {
    if (this.isAnswered) {
      return;
    }

    this.isAnswered = true;

    Analytics.sendEvent(`Question ${this.activeIndex + 1} - Option`);

    const { index } = el.dataset;
    const q = Data.questions[this.activeIndex];

    [].slice.call(EL.tOptions.childNodes).forEach((item) => {
      if (el !== item) {
        EL.tOptions.removeChild(item);
      }
    });

    if (q.options[index].isCorrect) {
      this.correctAnswers += 1;
      EL.tAnswerText.innerHTML = q.answer.correct;
      el.classList.add('is-correct');
    } else {
      EL.tAnswerText.innerHTML = q.answer.incorrect;
      el.classList.add('is-incorrect');
    }

    if (this.activeIndex === Data.questions.length - 1) {
      EL.tBtn.textContent = 'Результат';
      EL.tBtn.dataset.click = 'result';
    }

    EL.tBody.appendChild(EL.tAnswer);
  }

  continue() {
    this.isAnswered = false;

    Analytics.sendEvent(`Question ${this.activeIndex + 1} - Continue`);

    this.activeIndex += 1;

    EL.tBody.removeChild(EL.tAnswer);

    this.makeNextQuestion();
  }

  result() {
    this.isAnswered = false;

    Analytics.sendEvent('Result');

    EL.tBody.removeChild(EL.tAnswer);

    const { result, index } = Special.getResult(this.correctAnswers);

    EL.mInner.replaceChild(EL.result, EL.test);

    EL.rImg.src = result.img;
    EL.rImg.srcset = `${result.img2x} 2x`;
    EL.rImg.className = '';
    EL.rImg.classList.add(`${CSS.main}-result__img`);
    EL.rImg.classList.add(`${CSS.main}-result__img--${index + 1}`);
    EL.rResult.textContent = `${this.correctAnswers} из ${Data.questions.length} правильных ответов`;
    EL.rTitle.innerHTML = result.title;

    removeChildren(EL.rShare);
    Share.make(EL.rShare, {
      url: `${this.params.share.url}/${this.correctAnswers}`,
      title: this.params.share.title,
      twitter: this.params.share.title,
    });
  }

  restart() {
    this.setInitialParams();

    EL.tBtn.textContent = 'Далее';
    EL.tBtn.dataset.click = 'continue';

    EL.mInner.replaceChild(EL.test, EL.result);

    this.makeNextQuestion();
  }

  setInitialParams() {
    this.activeIndex = 0;
    this.correctAnswers = 0;
  }

  init() {
    this.setInitialParams();

    this.createElements();

    this.container.appendChild(EL.main);

    if (this.params.isFeed) {
      EL.main.classList.add('is-feed');
    }

    Analytics.sendEvent('First screen', 'Show');
  }
}

export default Special;
