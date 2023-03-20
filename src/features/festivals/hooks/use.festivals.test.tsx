/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent, act } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { Festival } from "../models/festival";
import { FestivalApiRepo } from "../services/festival.repo";
import { useFestivals } from "./use.festivals";

const mockRepo = {
  loadFestivals: jest.fn(),
  loadOneFestival: jest.fn(),
  createFestival: jest.fn(),
  updateFestival: jest.fn(),
  deleteFestival: jest.fn(),
} as unknown as FestivalApiRepo;

const mockFestival: Festival = {
  id: "1",
  name: "festival1",
} as Festival;

describe("Given a Test Component", () => {
  beforeEach(async () => {
    const TestComponent = function () {
      const {
        festivals,
        loadOneFestival,
        addFestival,
        updateFestival,
        deleteFestival,
      } = useFestivals(mockRepo);

      return (
        <div className="buttoncontainer">
          <button title="loadbutton" onClick={() => festivals}>
            load
          </button>
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

  describe("When loadFestivals is called", () => {
    test("Then it should load the festivals", async () => {
      await fireEvent.click(screen.getByText(/load/i));
      expect(mockRepo.loadFestivals).toHaveBeenCalled();
    });
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

/*describe("Given the useFestivals Custom Hook and TestError component", () => {
  const mockRepoError = {
    loadOneFestival: jest.fn().mockRejectedValue(new Error("Test Error")),
    addFestival: jest.fn().mockRejectedValue(new Error("Test Error")),
    updateFestival: jest.fn().mockRejectedValue(new Error("Test Error")),
    deleteFestival: jest.fn(),
  } as unknown as FestivalApiRepo;
  beforeEach(async () => {
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

  describe("When delete method method fails", () => {
    const spyOn = jest.spyOn(console, "error").mockImplementation(() => {});

    test("Then it should call the error console", async () => {
      try {
        await mockRepoError.deleteFestival("2");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }

      expect(mockRepoError.deleteFestival).toHaveBeenCalled();
      expect(spyOn).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledTimes(1);
    });
  });
});*/
