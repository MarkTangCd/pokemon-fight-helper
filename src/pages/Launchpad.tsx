const LaunchpadPage = () => {
  return (
    <div className="w-11/12 h-5/6 bg-black p-3 rounded-lg opacity-85">
      <div className="w-full flex gap-x-2">
        <input
          type="text"
          placeholder="Please enter the team name"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-info">Search</button>
        <button className="btn btn-primary ml-auto">Create</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Team Name</th>
              <th>Description</th>
              <th>Pokemons</th>
              <th>Rule</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>卡比兽腹鼓队</td>
              <td>卡比兽腹鼓吃果，全力输出</td>
              <td>卡比兽、喷火龙、水箭龟、妙蛙花、耿鬼、呆呆王</td>
              <td>
                <div className="w-[40px] h-[20px]  flex justify-center items-center text-sm rounded bg-sky-600">
                  F
                </div>
              </td>
              <td>
                <div className="w-[40px] h-[20px]  flex justify-center items-center text-sm rounded bg-sky-600">
                  单打
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LaunchpadPage;
