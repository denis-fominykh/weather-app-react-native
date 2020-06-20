export default class WeatherServices {
  private _apiKey: string = 'f49baef6b4984f869cda007be0df0833';
  private _apiBase: string = 'http://api.openweathermap.org/data/2.5/weather?';

  private getCity = (lat: number, lon: number) => {
    return `${this._apiBase}lat=${lat}&lon=${lon}&APPID=${this._apiKey}&units=metric`;
  };

  public fetchWeather = async (lat: number = 25, lon: number = 25) => {
    const res = await fetch(this.getCity(lat, lon));

    if (!res.ok) {
      throw new Error(`Received ${res.status}`);
    }

    const data = await res.json();
    return data;
  }
}
