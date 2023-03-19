/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent, act } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { Festival } from "../models/festival";
import { FestivalApiRepo } from "../services/festival.repo";
import { useFestivals } from "./use.festivals";

const mockRepo = {
  loadOneFestival: jest.fn(),
  createFestival: jest.fn(),
  updateFestival: jest.fn(),
  deleteFestival: jest.fn(),
} as unknown as FestivalApiRepo;

const mockFestival: Festival = {
  id: "1",
  name: "festival1",
} as Festival;

const spyOn = jest.spyOn(console, "error");
describe("Given a Test Component", () => {
  beforeEach(() => {
    const TestComponent = function () {
      const { loadOneFestival, addFestival, updateFestival, deleteFestival } =
        useFestivals(mockRepo);

      return (
        <div className="buttoncontainer">
          <button title="loadonebutton" onClick={() => loadOneFestival("1")}>
            get
          </button>
          <button title="addbutton" onClick={() => addFestival(mockFestival)}>
            create
          </button>
          <button
            title="updatebutton"
            onClick={() => updateFestival(mockFestival)}
          >
            update
          </button>
          <button title="deletebutton" onClick={() => deleteFestival("1")}>
            delete
          </button>
        </div>
      );
    };
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );
  });

  describe("When loadOneFestival is called", () => {
    test("Then it should call the load one function from api", async () => {
      await fireEvent.click(screen.getByText(/get/i));
      expect(mockRepo.loadOneFestival).toHaveBeenCalled();
    });
  });
  describe("When createFestival is called", () => {
    test("Then it should create a new festival", async () => {
      await fireEvent.click(screen.getByText(/create/i));
      expect(mockRepo.createFestival).toHaveBeenCalled();
    });
  });

  describe("When updateFestival is called", () => {
    test("Then it should update the festival", async () => {
      await fireEvent.click(screen.getByText(/update/i));
      expect(mockRepo.updateFestival).toHaveBeenCalled();
    });
  });
  describe("when deleteFestival is called", () => {
    test("Then it should delete the festival", async () => {
      await fireEvent.click(screen.getByText(/delete/i));
      expect(mockRepo.deleteFestival).toHaveBeenCalled();
    });
  });
});

describe("Given the useFestivals Custom Hook and TestError component", () => {
  beforeEach(async () => {
    const mockRepoError = {
      loadOneFestival: jest.fn().mockRejectedValue(new Error("Test Error")),
      addFestival: jest.fn().mockRejectedValue(new Error("Test Error")),
      updateFestival: jest.fn().mockRejectedValue(new Error("Test Error")),
      deleteFestival: jest.fn().mockRejectedValue(new Error("Test Error")),
    } as unknown as FestivalApiRepo;

    const TestError = function () {
      const { loadOneFestival, addFestival, updateFestival, deleteFestival } =
        useFestivals(mockRepoError);
      return (
        <>
          <button title="buttonload" onClick={() => loadOneFestival("1")}>
            Error
          </button>
          <button title="buttonadd" onClick={() => addFestival(mockFestival)}>
            Error
          </button>
          <button
            title="buttonupdate"
            onClick={() => updateFestival(mockFestival)}
          >
            Error
          </button>
          <button title="buttondelete" onClick={() => deleteFestival("1")}>
            Error
          </button>
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={store}>
          <TestError></TestError>
        </Provider>
      )
    );
  });

  describe("When load one method method fails", () => {
    test("Then it should call the error console", () => {
      (mockRepo.loadOneFestival as jest.Mock).mockRejectedValue(
        new Error("error")
      );
      expect(spyOn).toHaveBeenCalled();
    });
  });

  describe("When delete method method fails", () => {
    test("Then, the deleteFestival function should be catch the error", () => {
      (mockRepo.loadOneFestival as jest.Mock).mockRejectedValue(
        new Error("error")
      );
      expect(spyOn).toHaveBeenCalled();
    });
  });
});
